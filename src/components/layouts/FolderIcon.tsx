import Image from 'next/image'

export const FolderIcon = ({ src }: { src: string }) => {
  return <Image src={`/image/folder/${src}.png`} height={25} width={25} alt={src} />
}
