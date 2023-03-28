import Image from 'next/image'

export const FileIcon = ({
  src,
  height = 25,
  width = 25,
}: {
  src: string
  height?: number
  width?: number
}) => {
  return <Image src={`/image/file/${src}.png`} height={height} width={width} alt={src} />
}
