//Canal propio
const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCIDPrwo9_iopMBuyK5KX_EQ&part=snippet%2Cid&order=date&maxResults=10';
const content = document.querySelector('#content')

const urlYouTube = 'https://www.youtube.com/watch?v=';
const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cc7e19df03mshc89a32e2aaf9239p1704d1jsn116abe085cee',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, option);
  const data = await response.json();
  return data;
}

const prueba = async (urlApi) => {
  try {
    // const response = await fetch(url, option);
    const results = await fetchData(url);
    // console.log(result.items[0].snippet.title);
    // console.log(result.items[0].snippet.description);
    // console.log(result.items[0].snippet.thumbnails.high.url);

    let view = `
    ${results.items.map(result => `
    <a href='https://www.youtube.com/watch?v=${result.id.videoId}' target="_blank">
        <div class="group">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${result.snippet.thumbnails.high.url}" alt="${result.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${result.snippet.title}
                </h3>
            </div>
        </div>
    </a> 

    `).join('')}

    `;
    content.innerHTML = view;
    // <button>
    //     <a href='https://www.youtube.com/watch?v=${result.id.videoId}'>Ver video</a>
    // </button>
  } catch (error) {
    console.error(error);
  }
}

prueba(url);
