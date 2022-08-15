class ImageLink {
    smallThumbnail: string
    thumbnail: string
    constructor(){
      this.smallThumbnail = ""
      this.thumbnail = ""
    }
}
class VolumeInfo{
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    pageCount: number
    printedPageCount: number
    categories: string[]
    averageRating: number
    ratingsCount: number
    imageLinks: ImageLink
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
      constructor(){
        this.title= ""
        this.authors= []
        this.publisher= ""
        this.publishedDate= ""
        this.description= ""
        this.pageCount= 0
        this.printedPageCount= 0
        this.categories= []
        this.averageRating= 0
        this.ratingsCount= 0
        this.imageLinks = new ImageLink()
        this.previewLink= ""
        this.infoLink= ""
        this.canonicalVolumeLink= ""
      }
}
export class Book{
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
    constructor(){
      this.kind= ""
      this.id= ""
      this.etag= ""
      this.selfLink= ""
      this.volumeInfo = new VolumeInfo()
    }
}