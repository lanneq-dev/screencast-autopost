# convert webm to mp4
ffmpeg -fflags +genpts -i file.webm -r 24 file.mp4