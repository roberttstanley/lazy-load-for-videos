import { init, resizeResponsiveVideos, setBackgroundImage } from '../shared/video';
import createElements from '../utils/createElements';
import findElements from '../utils/findElements';

/*
 * Lazy Load Vimeo
 * by Kevin Weber (www.kweber.com)
 */

/** Deprecated. Will rework in next major release. */
window.showThumb = (data) => {
  const relevantData = data[0];

  if (lazyload_video_settings.vimeo.loadthumbnail) {
    findElements(`[id="${relevantData.id}"]`).forEach((domItem) => {
      setBackgroundImage(domItem, relevantData.thumbnail_large);
    });
  }
};

// Classes
const classPreviewVimeo = 'preview-vimeo';

let pluginOptions;
const defaultPluginOptions = {
  buttonstyle: '',
  playercolour: '',
  responsive: true,
  loadthumbnail: true,
  // callback: null, // <- Currently not supported
};

function removePlayerControls(element) {
  element.classList.remove(classPreviewVimeo);
}

function vimeoUrl(videoId) {
  return `https://player.vimeo.com/video/${videoId}`;
}

// Remove dots and hashs from a string
function filterDotHash(variable) {
  const filterdothash = variable.toString().replace(/[.#]/g, '');
  return filterdothash;
}

function vimeoLoadingThumb(videoLinkElement, id) {
  const playButtonDiv = createElements('<div aria-hidden="true" class="lazy-load-div"></div>');
  videoLinkElement.appendChild(playButtonDiv);

  if (lazyload_video_settings.vimeo.loadthumbnail) {
    const videoThumbnail = videoLinkElement.getAttribute('data-video-thumbnail');
    findElements(`[id="${id}"]`).forEach((domItem) => {
      setBackgroundImage(domItem, videoThumbnail);
    });
  }

  if (lazyload_video_settings.vimeo.show_title) {
    const videoTitle = videoLinkElement.getAttribute('data-video-title');
    const info = createElements(`<div aria-hidden="true" class="lazy-load-info"><span class="titletext vimeo">${videoTitle}</span></div>`);
    videoLinkElement.appendChild(info);
  }

  if (pluginOptions.buttonstyle) {
    videoLinkElement.classList.add(pluginOptions.buttonstyle);
  }
}

function vimeoCreateThumbProcess(videoLinkElement) {
  const previewItem = videoLinkElement;
  const vid = previewItem.getAttribute('id');

  // There was a bug for Vimeo URLs with a query param in it that wasn't filtered out by
  // the PHP code. This filtering ensures we only pick the video ID without any query params.
  // Note to future self: If you see this filter still in June 2020, feel free to remove it.
  // By now it should be fine to rely only on the server-side filtering.
  const [filteredVideoId] = vid.match(/[\w]+/);
  previewItem.setAttribute('id', filteredVideoId);

  // Remove no longer needed title (title is necessary for preview in text editor)
  previewItem.innerHTML = '';
  vimeoLoadingThumb(previewItem, filteredVideoId);
}

function vimeoCreatePlayer(videoLinkElement) {
  videoLinkElement.addEventListener('click', (event) => {
    const eventTarget = event.currentTarget;
    event.preventDefault();

    if (eventTarget.tagName.toLowerCase() !== 'a') {
      return;
    }

    const vid = eventTarget.getAttribute('id');

    removePlayerControls(eventTarget);

    let playercolour = '';
    if (pluginOptions.playercolour !== playercolour) {
      pluginOptions.playercolour = filterDotHash(pluginOptions.playercolour);
      playercolour = `&color=${pluginOptions.playercolour}`;
    }

    const videoIFrame = createElements(`<iframe src="${vimeoUrl(vid)}?autoplay=1${playercolour}" style="height:${parseInt(eventTarget.clientHeight, 10)}px;width:100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen allow=autoplay></iframe>`);
    eventTarget.parentNode.replaceChild(videoIFrame, eventTarget);

    if (pluginOptions.responsive === true) {
      resizeResponsiveVideos();
    }
  });
}

function load() {
  findElements(`.${classPreviewVimeo}`).forEach((domItem) => {
    vimeoCreateThumbProcess(domItem);
    // Replace thumbnail with iframe
    vimeoCreatePlayer(domItem);
  });
}

const lazyloadVimeo = (options) => {
  pluginOptions = {
    ...defaultPluginOptions,
    ...options,
  };

  init({
    load, pluginOptions, previewVideoSelector: `.${classPreviewVimeo}`,
  });
};

export default lazyloadVimeo;
