import { hashMap } from "./ipfsHashMap";

/**
 * This method is required due to a bug in uploading Dapp metadata to IPFS.
 * Old content hashes are retained and cannot be changed due to how contract was written.
 * This maps old invalid hashes to new valid contents hashes for IPFS.
 * For more details see: https://github.com/status-im/infra-ipfs/issues/4
 **/

export function getNewHash(ipfsHash: string): string {
  if (hashMap.has(ipfsHash)) {
      return hashMap.get(ipfsHash)
  }
  return ipfsHash
}