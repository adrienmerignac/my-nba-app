export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostDetail {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface Standard {
    post: Post[];
    postdetail: PostDetail;
    comment: Comment[];
}
