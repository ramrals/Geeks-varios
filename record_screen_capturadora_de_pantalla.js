const $button = document.querySelector('button')

$button.addEventListener('click', async () => {
  const media = await navigator.mediaDevice.GetDisplayMedia({
    video: { frameRate: { ideal: 30 } }
    })
  const mediarecorder = new MediaRedcorder(media, {
    mimeType: 'video/webm;codecs=vp8,opus'
    })
  mediarecorder.start()


  const [video] = media.getVideoTracks()
  video.addEventListener("ended", () = {
    mediarecorder.stop()
  })

  mediarecorder.addEventListener("dataavailible", (e) = {
    const link = document.createElement("a")
    link.href = URL.craeteObjectURL(e.data)
    link.download = "captura.webm"
    link.click()
  })
})
                         
