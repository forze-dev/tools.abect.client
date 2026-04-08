import JSZip from 'jszip'
import { triggerDownload } from './download'

export async function buildZip(files) {
  const zip = new JSZip()
  files.forEach(f => {
    if (f.resultBlob) {
      const baseName = f.name.replace(/\.[^.]+$/, '')
      zip.file(`${baseName}.webp`, f.resultBlob)
    }
  })
  const blob = await zip.generateAsync({ type: 'blob' })
  triggerDownload(blob, 'webp-converted.zip')
}
