import { GalleryImage } from '../gallery/gallery.models';

export class Project {
    backgroundImage = '';
    images: GalleryImage[] = [];
    title = '';
    description = '';
    langs: string[] = [];
    githubLinks: Link[] = [];
    trelloLinks: Link[] = [];
    fullWidth = false;
}

export class Link {
    path = '';
    text = '';
    id = '';
}