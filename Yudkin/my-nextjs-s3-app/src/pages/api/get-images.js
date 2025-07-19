// pages/api/get-images.js
import AWS from 'aws-sdk';

export default async function handler(req, res) {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    const images = data.Contents.map((item) => ({
      key: item.Key,
      url: `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${item.Key}`,
    }));
    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch images from S3' });
  }
}
