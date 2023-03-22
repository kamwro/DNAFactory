const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const DNAFactory = (number, DNAbases) => {
    return {
    specimen: number,
    dna: DNAbases,
    mutate () {
      let newBase = returnRandBase();
      while (newBase === DNAbases[0]) {
        newBase = returnRandBase();
      }
      DNAbases[0] = newBase;
    },
    compare(DNAExternal) {
      let compatibility = 0;
      const len = Math.min(this.dna.length, DNAExternal.dna.length);
      for (let i = 0; i < len; i++){
        if (this.dna[i] === DNAExternal.dna[i])
        {compatibility++;}
      }
      compatibility /= len;
      console.log(`specimen #${this.specimen} and specimen #${DNAExternal.specimen} have ${Math.round(compatibility*100*100)/100}% DNA in common`);
    },
    willLikelySurvive() {
      const CnGonly = this.dna.filter(node => node === "C" || node === "G");
      return CnGonly.length/this.dna.length >= 0.6;
    }
  
    }
  
  }
  
  // create 100 dnas that will likely survive for further studies
  const dnas = [];
  while (dnas.length < 100){
    const strand = mockUpStrand();
    const dna = DNAFactory(dnas.length+1, strand);
    if (dna.willLikelySurvive()) dnas.push(dna);
  }
  

  
  
  
  
  
  