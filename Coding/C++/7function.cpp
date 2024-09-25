#include <iostream>
using namespace std;

//we are just taking function first line at top of main so that compiler will note that there is function before execution
int mint(int a,int b);
int sumN(int n);
bool cPrime(int nu);
int sumOfDigits(int num);
int nCr(int n, int r);
int facto(int n);

int main(){
    cout<<"min of 4 and 3 is"<<mint(3,4)<<endl;

    //printing sum of n=8 numbers
    cout<<sumN(8)<<endl;

    //printing factorial for n=5
    cout<<facto(5)<<endl;

    //printing sum of digits of number say 124
    cout<<sumOfDigits(124)<<endl;

    //binomial of 5 by calling ncr function
    int n=5, r=2;
    cout<<nCr(5,2)<<endl;

    //check if prime
    cout<<cPrime(90);


    return 0;
}

int mint(int a,int b){
    if (a<b){
        return a;
    }else{
        return b;
    }
}

//function to print sum of n numbers
int sumN(int n){
    int sum=0;
    for (int i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

//factorial function
int facto(int n){
    int fact=1;
    for(int i=1; i<=n;i++){
        fact*=i;
    }
    return fact;
}

//function to calculate binomial coefficient for n and r
int nCr(int n, int r){
    //we are calling above facto() function in our new function
    int fact_n=facto(n) ;    
    int fact_r=facto(r);
    int fact_n_r=facto(n-r);

    return fact_n/(fact_r * fact_n_r);
}

//function to calculate sum of digits of a number
int sumOfDigits(int num){
    int digSum=0;
    while(num>0){
        int lastDig=num%10;
        num/=10;
        digSum+=lastDig;
    }
    return digSum;
}

//function to check if number is prime or not
bool cPrime(int nu){
    bool p=true;
    for(int q=2; q*q<=nu;++q){
        if(nu%q==0){
            p=false;
            break;
        }
    }
    if(p==true){
        cout<<nu<<" is a prime number."<<endl;
    }else{
        cout<<nu<<" is not a prime number."<<endl;
    }
}
