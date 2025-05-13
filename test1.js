function groupAnagrams(strs) {
  if(strs.length === 0) return [[""]]

  const cache = new Map();
  for (const str of strs) {
    const key = JSON.stringify([...str].sort())
    if(cache.has(key)){
      cache.set(key, [ ...cache.get(key), str])
    }else{
      cache.set(key, [str])
    }
  }

  let min = 0, res = []
  for (const value of cache.values()) {
    if(value.length > min){
      res.unshift(value.sort())
    }
  }
  return res
};

const strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))