import Image from 'next/image'

export const FolderIcon = ({ src, height=25, width=25 }: { src: string, height?: number, width?: number }) => {
  return <Image src={`/image/folder/${src}.png`} height={height} width={width} alt={src} />
}
