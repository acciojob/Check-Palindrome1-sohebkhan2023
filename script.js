// complete the given function

function palindrome(str)
{
	var str1=str;
	var newString ="";
	for(var i=str.length-1;i>=0;i--)
		{
			newString += str[i];
			
		}
	if(newString==str1)
	{
		return true;
	}
	else
	{
		return false;
	}

}
module.exports = palindrome
