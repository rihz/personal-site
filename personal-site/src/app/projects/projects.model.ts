import { GalleryImage } from '../gallery/gallery.models';

export class Project {
    images: GalleryImage[] = [];
    title = '';
    description = '';
    langs: string[] = [];
    githubLinks: Link[] = [];
    trelloLinks: Link[] = [];
    reverse = false;
}

export class Link {
    path = '';
    text = '';
    id = '';
}