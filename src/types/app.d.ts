/// <reference types="nativewind/types" />
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.jpg'
declare module '*.jpeg'

declare module 'styled-components/native'
