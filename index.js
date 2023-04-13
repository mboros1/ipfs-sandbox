import { create } from 'ipfs-http-client';

/**
 * The IPFS HTTP client instance.
 * @type {import('ipfs-http-client').IPFS}
 */
const ipfs = create({ url: 'http://localhost:5001' });

/**
 * Pins a file to IPFS using its Content Identifier (CID).
 * @async
 * @param {string} cid - The Content Identifier (CID) of the file to pin.
 * @returns {Promise<void>} A promise that resolves when the file is pinned or rejects with an error.
 */
async function pinFileToIPFS(cid) {
  try {
    await ipfs.pin.add(cid);
    console.log('Pinned file:', cid);
  } catch (error) {
    console.error('Error pinning file to IPFS:', error);
  }
}

/**
 * Adds a file to IPFS and logs its CID and path.
 * @async
 * @returns {Promise<void>} A promise that resolves when the file is added or rejects with an error.
 */
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

