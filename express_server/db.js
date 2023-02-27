const Pool = require('pg').Pool
const aws = require('aws-sdk');

const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");

const ACCOUNT_ID = process.env.ACCOUNT_ID
const REGION = process.env.REGION
const BucketName = ACCOUNT_ID+'-'+REGION+'-lab-media-files'

const pool = new Pool({
  user: 'postgres',
  host: '',
  database: '',
  password: '',
  port: 5432,
})

const s3Client = new S3Client({ 
  region: REGION,
}); 

async function getAvailableDogs() {
    const dogs = await pool.query('SELECT *  FROM unicorns')
    return dogs.rows
}

//  complete Account Id and Region 
async function getImageOfDog(imageId) {
  const bucketParams = { Bucket: BucketName, Key: `static/dog-${imageId}.jpeg` };
  const data = await s3Client.send(new GetObjectCommand(bucketParams));
  // Convert the ReadableStream to a string.
  // console.log(await data.Body.transformToString())
  return await data.Body.transformToByteArray();
}


module.exports =  { getAvailableDogs, getImageOfDog }