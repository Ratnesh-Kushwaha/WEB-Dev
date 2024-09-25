#include <iostream>
using namespace std;

int main(){

    //while loop
    int i =1;
    int n=50;

    while (i<=n)
    {
        cout<<i<<" ";    //we use " " to give space between the numbers and all number print in single row try to write <<endl after this line and see it will print in column wise
        i++;
    }
    cout<<endl;

    //for loop
    for(int j=1; j<=3;j++){
        cout<<j<<endl;       //endl inside loop se 1 2 3 print in column wise
    }
    cout<<endl;
    

    //code to find sum of n numbers using for loop
    int l;
    int sum=0;
    
    cout<<"Enter your number: ";
    cin>>l;
    for(int k=1; k<=l; k++){
        sum+=k;
        if(k==30){
            break;    //using brake in conditional statement it will stop summing after 30
        }
    }
    cout<<"sum of your given number is (with condition that its sum limit is 30): "<<sum<<endl;

    //finding value of odd sum
    int m=13;
    int oddSum=0;
    for(int n=1;n<=l;n++){
        if(n%2!=0){
            oddSum+=n;
        }
    }
    cout<<"odd number ka sum: "<<oddSum<<endl;


    // int i=1;
    // int sum=0;
    // while(i<=5){
    //     if (i%2!=0)
    //     {
    //         sum+=i;
    //     }
    //     i++;
    // }
    // cout<<"sum is "<<sum;

    //do while loop
    cout<<"decrementing order of 13 is: ";
    do{
        cout<<m << " ";
        m--;
    }while(m>=0);
    cout<<endl;


    //find prime number
    bool isPrime=true;
    for(int q=2; q<l;q++ ){         //instead of writing q<l we can write q*q <= l and after one time it well show repeated factors so we optimise code mathematically
        if(l%q==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime==true){
        cout<<l<<" is a prime number."<<endl;
    }else{
        cout<<l <<" is not a prime number."<<endl;
    }

    int facto=1;
    for(int k=1; k<=l; k++){
        facto=facto*k;
    }
    cout<<"factorial of "<<l<<" is: "<<facto<<endl;
    
    return 0;
    
}