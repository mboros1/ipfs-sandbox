import { create } from 'ipfs-http-client';
const ipfs = create({ url: 'http://localhost:5001' });

async function addFileToIPFS() {
  try {
    const fileContent = Buffer.from('Hello IPFS!');
    const result = await ipfs.add(fileContent);
    console.log('Added file:', result.path, result.cid.toString());
  } catch (error) {
    console.error('Error adding file to IPFS:', error);
  }
}

addFileToIPFS();

