export type Category = 'homepage' | 'essay' | 'note' | 'design' | 'craft';

export type Post = {
	title: string;
	slug: string;
	date: string;
	category: string;
	hasLink: boolean;
	previewImage: string | null;
	previewVideo: string | null;
	hasPreviewComponent: boolean | null;
};
