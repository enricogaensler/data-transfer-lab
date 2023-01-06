const Pool = require('pg').Pool
const aws = require('aws-sdk');

const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");


const pool = new Pool({
  user: 'postgres',
  host: '',
  database: '',
  password: '',
  port: 5432,
})

const s3Client = new S3Client({ 
  region: 'us-east-1',
}); 

async function getAvailableUnicorns() {
    const unicorns = await pool.query('SELECT *  FROM unicorns')
    return unicorns.rows
}

//  complete Account Id and Region 
async function getImageOfUnicorn(imageId) {
  const bucketParams = { Bucket: 'ACCOUNT_ID-REGION-lab-media-files', Key: `static/windpark-${imageId}.jpg` };
  const data = await s3Client.send(new GetObjectCommand(bucketParams));
  // Convert the ReadableStream to a string.
  // console.log(await data.Body.transformToString())
  return await data.Body.transformToByteArray();
}


module.exports =  { getAvailableUnicorns, getImageOfUnicorn }