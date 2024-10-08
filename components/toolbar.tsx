'use client'

import React, { ElementRef, useRef, useState } from "react"
import { ImageIcon, Smile, X } from "lucide-react"
import { useMutation } from "convex/react"
import TextAreaAutoSize from 'react-textarea-autosize'

import { useConverImage } from "@/hooks/use-cover-image"
import { Doc } from "@/convex/_generated/dataModel"
import { Button } from "@/components/ui/button"

import { IconPicker } from "./icon-picker"
import { api } from "@/convex/_generated/api"
interface ToolbarProps {
  initialData: Doc<'vaults'>
  preview?: boolean
}

export function Toolbar({ initialData, preview }: ToolbarProps) {

  const inputRef = useRef<ElementRef<'textarea'>>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(initialData.title)

  const update = useMutation(api.vaults.update)
  const removeIcon = useMutation(api.vaults.removeIcon)

  const coverImage = useConverImage()

  const enableInput = () => {
    if (preview) return

    setIsEditing(true)
    setTimeout(() => {
      setValue(initialData.title)
      inputRef.current?.focus()
    }, 0)
  }

  const disableInput = () => setIsEditing(false)

  const onInput = (value: string) => {
    setValue(value)
    update({
      id: initialData._id,
      title: value || 'Empty zettel'
    })
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      disableInput()
    }
  }

  const onIconSelect = (icon: string) => {
    update({
      id: initialData._id,
      icon,
    })
  }

  const onRemoveIcon = () => {
    removeIcon({
      id: initialData._id
    })
  }

  return (
    <div className="pl-[54px] group relative mt-3">
      {!!initialData.icon && !preview && (
        <div className="flex gap-x-2 items-center group/icon pt-2">
          <IconPicker onChange={onIconSelect}>
            <p className="text-3xl hover:opacity-75 transition">{initialData.icon}</p>
          </IconPicker>
          <Button className="rounded-full opacity-0 group-hover/icon:opacity-100 transition
          text-muted-foreground text-xs" variant='outline' size='icon' onClick={onRemoveIcon}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}
      {!!initialData.icon && preview && (
        <p className="text-6xl pt-6">
          {initialData.icon}
        </p>
      )}
      <div className="flex items-center gap-x-1 py-4">
        {!initialData.icon && !preview && (
          <IconPicker asChild onChange={onIconSelect}>
            <Button className="text-muted-foreground text-xs" variant='outline' size='sm'>
              <Smile className="w-4 h-4 mr-2" />
              Add icon
            </Button>
          </IconPicker>
        )}
        {!initialData.coverImage && !preview && (
          <Button className="text-muted-foreground text-xs" variant='outline' size='sm' onClick={coverImage.onOpen}>
            <ImageIcon className="w-4 h-4 mr-2" />
            Add cover
          </Button>
        )}
      </div>
      {isEditing && !preview ? (
        <TextAreaAutoSize className="text-3xl pt-12 bg-transparent font-bold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF]
        resize-none"
          ref={inputRef} onBlur={disableInput} onKeyDown={onKeyDown} value={value}
          onChange={e => onInput(e.target.value)} />
      ) : (
        <div className={`pb-[11.5px] text-3xl font-bold break-words outline-none text-[#3F3F3F] dark:text-[#CFCFCF] ${preview ? 'pt-0' : 'pt-12'}`} onClick={enableInput}>
          {initialData.title}
        </div>
      )}
    </div>
  )
}
