const imageURL = (mediaId: string) => `${process.env.API_URL as string}/medias/${mediaId}`;

export default imageURL;
