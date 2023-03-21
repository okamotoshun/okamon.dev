import Image from 'next/image'

export const FileIcon = ({ src }: { src: string }) => {
  return <Image src={`/image/file/${src}.png`} height={25} width={25} alt={src} />
}
