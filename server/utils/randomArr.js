/**
 * 
 * @param {*} wordlist refer to list of words
 * @param {*} len refer to reuired length of new generated list
 * @returns return a list of {len} objects selected randomly from the "wordsList"
 */
module.exports = (wordlist,len)=>{
    // declaration
    let uniqueIds = new Set();
    let result = [];
    let index = 0,mod = wordlist.length;
    let verbState = false,nounState = false, adverbState = false, adjectiveState = false;
    while(result.length < len){
        index = Math.floor(Math.random() * mod);
        if(wordlist[index].pos == 'adverb' && !adverbState){
            result.push(wordlist[index]);
            adverbState = true;
        }else if(wordlist[index].pos == 'noun' && !nounState){
            result.push(wordlist[index]);
            nounState = true;
        }else if(wordlist[index].pos == 'adjective' && !adjectiveState){
            result.push(wordlist[index]);
            adjectiveState = true;
        }else if(wordlist[index].pos == 'verb' && !verbState){
            result.push(wordlist[index]);
            verbState = true;
        }else if(adverbState && verbState && adjectiveState && nounState){
            if(!uniqueIds.has(wordlist[index].id)){
                result.push(wordlist[index]);
            }
        }

        uniqueIds.add(wordlist[index].id);
    }
    console.log('enddddddddd');

    return result;
}