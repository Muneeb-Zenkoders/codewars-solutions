// This question is a variation on the Arithmetic Progression kata

// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

function missingNo(nums) {
    for(let i=0;i<nums.length-1;i++){
      for(let j=0;j<nums.length-i-1;j++)
        {
          if(nums[j]>nums[j+1])
            {
              let temp = nums[j];
              nums[j] = nums[j+1];
              nums[j+1] = temp;
            }
        }
    }
    for(let i=0;i<nums.length;i++)
      {
        if(nums[i]==i)
          {
            continue;
          }
        else{
          return i;
        }
      }
  }

//   https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/train/javascript