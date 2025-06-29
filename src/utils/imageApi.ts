export interface UnsplashImage {
  id: string
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
  }
  alt_description: string | null
  description: string | null
  user: {
    name: string
    username: string
  }
  width: number
  height: number
}

const imageCache = new Map<string, UnsplashImage[]>()

export const fetchImages = async (
  query: string = 'nature',
  count: number = 6,
  width: number = 1200,
  height: number = 800
): Promise<UnsplashImage[]> => {
  const cacheKey = `${query}-${count}-${width}-${height}`

  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!
  }

  try {
    const mockImages: UnsplashImage[] = [
      {
        id: '1',
        urls: {
          raw: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
          full: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
          regular: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          small: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
          thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max'
        },
        alt_description: 'Mountain landscape',
        description: 'Beautiful mountain landscape at sunset',
        user: {
          name: 'Nature Photographer',
          username: 'naturephoto'
        },
        width: 1200,
        height: 800
      },
      {
        id: '2',
        urls: {
          raw: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
          full: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
          regular: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          small: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
          thumb: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max'
        },
        alt_description: 'Forest path',
        description: 'Mysterious forest path',
        user: {
          name: 'Forest Explorer',
          username: 'forestexplorer'
        },
        width: 1200,
        height: 800
      },
      {
        id: '3',
        urls: {
          raw: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
          full: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
          regular: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          small: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
          thumb: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max'
        },
        alt_description: 'Ocean waves',
        description: 'Ocean waves crashing on rocks',
        user: {
          name: 'Ocean Lover',
          username: 'oceanlover'
        },
        width: 1200,
        height: 800
      },
      {
        id: '4',
        urls: {
          raw: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d',
          full: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
          regular: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          small: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
          thumb: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max'
        },
        alt_description: 'Desert landscape',
        description: 'Vast desert with sand dunes',
        user: {
          name: 'Desert Wanderer',
          username: 'desertwanderer'
        },
        width: 1200,
        height: 800
      },
      {
        id: '5',
        urls: {
          raw: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
          full: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
          regular: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          small: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
          thumb: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max'
        },
        alt_description: 'Starry night sky',
        description: 'Beautiful starry night over mountains',
        user: {
          name: 'Stargazer',
          username: 'stargazer'
        },
        width: 1200,
        height: 800
      },
      {
        id: '6',
        urls: {
          raw: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a',
          full: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
          regular: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          small: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
          thumb: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max'
        },
        alt_description: 'Snowy peaks',
        description: 'Snow-capped mountain peaks',
        user: {
          name: 'Mountain Climber',
          username: 'mountainclimber'
        },
        width: 1200,
        height: 800
      }
    ]

    const selectedImages = mockImages.slice(0, count)

    imageCache.set(cacheKey, selectedImages)
    
    return selectedImages
  } catch (error) {
    console.error('Error fetching images:', error)
    return []
  }
}

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

export const getOptimalImageSize = (image: UnsplashImage): string => {
  const screenWidth = window.innerWidth
  const devicePixelRatio = window.devicePixelRatio || 1
  
  if (screenWidth * devicePixelRatio <= 400) {
    return image.urls.small
  } else if (screenWidth * devicePixelRatio <= 800) {
    return image.urls.regular
  } else {
    return image.urls.full
  }
}