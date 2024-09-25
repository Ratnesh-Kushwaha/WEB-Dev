#include <iostream>
using namespace std;

int decimalToBi(int deciNum);
int binaryToDecimal(int biNum);

int main(){
    
    cout<<decimalToBi(50)<<endl;

    cout<<binaryToDecimal(100)<<endl;

    return 0;

}


//function to calculate binary from decimal
int decimalToBi(int deciNum){
    int ans=0, pow=1;
    
    while (deciNum>0){
        int rem=deciNum%2;
        deciNum/=2;         //updating decimal Number for the next loop

        ans+=rem*pow;
        pow*=10;
    }
    return ans;
}

//functio to calculate decimal from binary
int binaryToDecimal(int biNum){
    int ans=0, pow=1;

    while (biNum>0){
        int rem=biNum%10;
        ans+=(rem*pow);

        biNum/=10;
        pow*=2;
    }
    return ans;
}