

function largestCharacter(arr)
{    
    let largest = "";
    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        if (char > largest) {
            largest = char;
        }
    }
    return largest
}
exports.handleget = async(req,res)=>{
    try{
        res.status(200).json({
            operation_code:1
        })
    }catch(e){
        res.status(404).json({
            message:e
        })
    }
}
exports.handlePost = async(req,res,next)=>{
    try{
        const input = req.body.data
        if(!input){
            res.status(404).json({
                is_success:false,
                message:"Please send data as a request body to this post route"
            })
        }else if(typeof(input)!=Array){
            res.status(404).json({
                is_success:false,
                message:"Data should be in arra format"
            })
        }
        const charArray = []
        const numArray = []
        console.log(input.length)
         for(index = 0;index<input.length;index++){
            var num = parseInt(input[index])
            console.log(num)
            if(!num){
                const alphabetPattern = /^[A-Za-z]+$/;
                const isValid = alphabetPattern.test(input[index])
                if(input[index].length>=2){
                    continue
                }
                if(isValid){
                    charArray.push(input[index]);
                }
            }else{
                numArray.push(input[index]);
            }
        }
        var largestChar = largestCharacter(charArray)
        var largestCharArray = []
        largestCharArray.push(largestChar)
        res.status(200).json({
            is_success:true,
            user_id:"boyapati_jane_prakeerth_reddy_06062002",
            email:"bp5421@srmist.edu.in",
            roll_number:"RA2011003010276",
            numbers:numArray,
            alphabets:charArray,
            highest_alphabet :largestCharArray
        })
    }catch(err){
        res.status(404).json({
            is_success:false,
            message:err
        })
    }
  
}
