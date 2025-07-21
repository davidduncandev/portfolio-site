'use client'
import React from 'react'
import { Switch } from '@/components/switch'
import { Label } from '@/components/fieldset'
import * as Headless from '@headlessui/react'

export function AspectRatioDemo() {
  const [on, setOn] = React.useState(false)
  const toggleOn = () => setOn(!on)
  return (
    <div className="grid h-full grid-rows-[1fr_auto] gap-4">
      <div className="grid h-full grid-cols-2 grid-rows-[auto_auto_auto_1fr_auto_auto] gap-2">
        <div
          className={`[grid-row:span_6] grid divide-y-1 divide-zinc-400 border-2 border-zinc-400 *:[interpolate-size:allow-keywords] ${on ? 'grid-rows-subgrid *:h-auto' : 'grid-rows-[auto_auto_auto_1fr_auto_auto]'}`}
        >
          <div className="h-[31px]">
            <div className="h-[30px]" />
          </div>
          <div className="h-[41px]">
            <div className="h-[40px]" />
          </div>
          <div className="h-[41px]">
            <div className="h-[40px]" />
          </div>
          <div className="">
            <div className="" />
          </div>
          <div className="h-[31px]">
            <div className="h-[30px]" />
          </div>
          <div className="h-[51px]">
            <div className="h-[50px]" />
          </div>
        </div>
        <div
          className={`[grid-row:span_6] grid divide-y-1 divide-zinc-400 border-2 border-zinc-400 *:[interpolate-size:allow-keywords] *:[transition:_height_1s_ease] ${on ? 'grid-rows-subgrid *:h-auto' : 'grid-rows-[auto_auto_auto_1fr_auto_auto]'}`}
        >
          <div className="h-[21px]">
            <div className="h-[20px]" />
          </div>
          <div className="h-[36px]">
            <div className="h-[35px]" />
          </div>
          <div className="h-[76px]">
            <div className="h-[75px]" />
          </div>
          <div>
            <div />
          </div>
          <div className="h-[16px]">
            <div className="h-[15px]" />
          </div>
          <div className="h-[31px]">
            <div className="h-[30px]" />
          </div>
        </div>
      </div>
      <div className="grid place-content-center">
        <Headless.Field className="flex items-center justify-center gap-4">
          <Switch
            onChange={toggleOn}
            aria-label={'CSS Subgrid'}
            className="bg-zinc-500"
          />
          <Label className="!text-white">CSS Subgrid</Label>
        </Headless.Field>
      </div>
      {/* <div className="grid place-content-center">
        <div className="flex aspect-[4/3] items-center justify-center overflow-hidden [&>img]:h-full [&>img]:w-full [&>img]:object-cover">
          <Image src={image1} alt="" className="" />
        </div>
        <p className="[&>*]:relative [&>*]:inline-block [&>*]:text-transparent [&>*]:before:absolute [&>*]:before:inset-x-0 [&>*]:before:inset-y-1/2 [&>*]:before:border-2 [&>*]:before:bg-zinc-400 [&>*]:before:content-[''] [&>*]:before:dark:bg-white">
          <span>curar</span> <span>primis</span> <span>pretium</span>
          <span>tempus</span> <span>odio</span> <span>eu</span>
        </p>
      </div> */}
    </div>
  )
}
