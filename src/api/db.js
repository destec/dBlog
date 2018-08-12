import * as IPFS from 'ipfs-api';
import * as Orbit from 'orbit-db';

let ipfs;
let orbit;

let authorDb;
let postDb;

export async function authorDb() {
  if (!ipfs) ipfs = IPFS('localhost', '5001');
  if (!orbit) orbit = new Orbit(ipfs);

  if (!authorDb) authorDb = await orbit.log('authors');

  return authorDb;
}
