import { S3Client } from "@aws-sdk/client-s3";

const REGION = "sa-east-1"; //e.g. "us-east-1"

// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION });
export { s3Client };