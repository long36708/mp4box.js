var file = {};
file.mp4boxfile = null;
file.objectToLoad = null;
file.objectIsFile = false;
file.fancytree = null;
file.avifFragmentedFile = null;

Log.setLogLevel(Log.debug);

function mseViewAVIFItem(fileobj, loadbutton, success) {
  loadbutton.button('enable');
  if (success) {
    console.log('文件加载成功 (File loaded successfully)');
    console.log('Items in file:', file.mp4boxfile.items);

    file.avifFragmentedFile = file.mp4boxfile.itemToFragmentedTrackFile();

    if (!file.avifFragmentedFile) {
      console.error('无法创建分片文件 (Failed to create fragmented file)');
      console.error('Meta box:', file.mp4boxfile.meta);
      console.error('Items:', file.mp4boxfile.items);
      alert('无法创建 AVIF 分片文件 (Failed to create AVIF fragmented file)');
      return;
    }

    console.log('AVIF 分片文件创建成功 (AVIF fragmented file created successfully)');

    //initializeMSE();
    const buffer = file.avifFragmentedFile.getBuffer();

    if (!buffer || buffer.byteLength === 0) {
      console.error('无法获取缓冲区或缓冲区为空 (Failed to get buffer or buffer is empty)');
      alert('无法获取 AVIF 缓冲区 (Failed to get AVIF buffer)');
      return;
    }

    console.log('缓冲区大小 (Buffer size):', buffer.byteLength, 'bytes');

    document.getElementById('v').src = window.URL.createObjectURL(
      new Blob([buffer], {
        type: 'video/mp4; codecs="av01.0.13M.08"',
      }),
    );
  } else {
    console.log('文件加载失败 (File load failed)');
  }
}

window.onload = function () {
  createLoadBar($('#menubar'), 'File', 'file', file, mseViewAVIFItem);

  if (window.location.search) {
    file.objectToLoad = window.location.search.substring(1);
    load();
  }
};

function onUpdateEnd(e) {
  var sb = this;
  // No-op
}

function onSourceClose(e) {
  document.getElementById('dropArea').innerHtml = 'MediaSource closed!';
}

function onSourceOpen(e) {
  var ms = e.target;
  sb = ms.addSourceBuffer('video/mp4; codecs="' + file.avifFragmentedFile.getCodecs() + '"');
  sb.ms = ms;
  sb.addEventListener('updateend', onUpdateEnd.bind(sb));
  file.avifFragmentedFile.save('test.mp4');
  sb.appendBuffer(file.avifFragmentedFile.getBuffer());
}

function initializeMSE() {
  var video = document.getElementById('v');
  mediaSource = new MediaSource();
  mediaSource.video = video;
  video.ms = mediaSource;
  mediaSource.addEventListener('sourceopen', onSourceOpen);
  mediaSource.addEventListener('sourceclose', onSourceClose);
  video.src = window.URL.createObjectURL(mediaSource);
}
