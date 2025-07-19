import AWS from 'aws-sdk';

export default async function handler(req, res) {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  const { key } = req.query;  // The S3 key of the image to download

  if (!key) {
    return res.status(400).json({ error: 'Image key is required' });
  }

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,
  };

  try {
    // Generate a signed URL for the image with download headers
    const url = s3.getSignedUrl('getObject', {
      ...params,
      Expires: 60,  // URL valid for 1 minute
      ResponseContentDisposition: `attachment; filename="${key}"`,
    });

    res.status(200).json({ url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate download link' });
  }
}
