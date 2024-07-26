'use client'
import Button from "@/app/(landing)/_components/Button"
import { useMutation, useQuery } from "convex/react"
import dynamic from "next/dynamic"
import { useMemo, ChangeEvent, useState, useRef } from "react"
import Tesseract from 'tesseract.js'

import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { Toolbar } from "@/components/toolbar"
import { Cover } from "@/components/cover"
import { Skeleton } from "@/components/ui/skeleton"

interface DocumentIdPageProps {
  params: {
    documentId: Id<'vaults'>
  }
}

export default function DocumentIdPage({ params }: DocumentIdPageProps) {

  const Editor = useMemo(() => dynamic(() => import("@/components/editor"), { ssr: false }), [])

  const document = useQuery(api.vaults.getById, {
    documentId: params.documentId
  })

  const update = useMutation(api.vaults.update)

  const [extractedText, setExtractedText] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const onChange = (content: string) => {
    update({
      id: params.documentId,
      content
    })
  }

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      try {
        const result = await Tesseract.recognize(file, 'eng')
        const text = result.data.text
        console.log('Extracted Text:', text) // Debugging log
        setExtractedText(text) // Set the extracted text to state

        // Ensure the content is in the expected JSON format
        const updatedContent = [
          {
            type: "paragraph",
            children: [{ text: (document?.content ?? '') + '\n' + text }]
          }
        ]
        onChange(JSON.stringify(updatedContent)) // Update content as JSON string
      } catch (error) {
        console.error("Error processing the image with Tesseract.js:", error)
      }
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-14 w-[80%]" />
            <Skeleton className="h-14 w-[40%]" />
            <Skeleton className="h-14 w-[60%]" />
          </div>
        </div>
      </div>
    )
  }

  if (document === null) {
    return <div>Not Found</div>
  }

  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={document} />
        <div className="my-4 flex mx-15 justify-start">
          <Button
            onClick={handleClick}
            // className="bg-transparent text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Upload Image for scanning text from image
          </Button>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageUpload}
            ref={fileInputRef}
            className="hidden"
          />
        </div>
        {extractedText && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h2 className="font-bold text-blue-600">Extracted Text:</h2>
            <p className="text-blue-600">{extractedText}</p>
          </div>
        )}
        <Editor onChange={onChange} initialContent={document.content} />
      </div>
    </div>
  )
}
