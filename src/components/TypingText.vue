<template>
    <div>
        A Freelancer
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dynamicText: '',
                ListOfTexts: ['Freelancer', 'Software Developer', 'Architect'],
                currentWordIndex: 0,
            }
        },
        mounted () {
            let letter_index = 0
            /*
            if (this.currentWordIndex < this.ListOfTexts.length){
                this.currentWordIndex++
            }else{
                this.currentWordIndex = -1
            }
            
            setInterval(()=>{
                if (letter_index < this.ListOfTexts[this.currentWordIndex].length){
                    this.dynamicText += this.ListOfTexts[this.currentWordIndex][letter_index];
                    letter_index++
                }else{
                    letter_index = 0;
                    this.dynamicText += this.ListOfTexts[this.currentWordIndex][letter_index];
                }
                
                }, 1000)
            */
            function animation(componentObj, index){
                console.log('hi')
                
            }
                async function writeWord(componentObject){
                    for(let i=0; i < componentObject.ListOfTexts.length; i++){
                        const word = componentObject.ListOfTexts[i]
                        for(let i=0; i < word.length; i++){
                            componentObject.dynamicText += word[i]
                            await setTimeout(() => {console.log('hi')}, 2000)
                            
                        }
                    }
                }
        },
    }
</script>

<style scoped>

</style>