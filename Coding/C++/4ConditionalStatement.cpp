#include <iostream>
using namespace std;


int main(){

    //if else statement
    int a;
    cout<<"input your no.: ";
    cin>>a;

    if((a%2)==0){
        cout<<a<<" is an even number\n";
    }else{
        cout<<a<<" is an odd number\n";
    }


    //if else-if else
    int m;
    cout<<"Enter the marks: ";
    cin>>m;

    if(m>=80 && m<100){
        cout<<"Congratulation! You got first grade with "<<(m)<<"%"<<endl;
    }else if(m>=60 && m<=79){
        cout<<"Congratulation! You got second grade with "<<(m)<<"%"<<endl;
    }else if(m>=40 && m<=59){
        cout<<"You got third grade with "<<(m)<<"%  do your best and put more effor next time."<<endl;
    }else if(m>100){
        cout<<"Oops! invalid input please input correct marks."<<endl;
    }else{
        cout<<"you fail. Work hard in next exam.\n";
    }


    //to find if character is in uppercase or in lower case
    char ch;
    cout<<"Enter your character: ";
    cin>>ch;

    // if(ch>='a' && ch<='z'){
    //     cout<<"lowercase";
    // }else{
    //     cout<<"uppercase";
    // }

    // //OR writing above conditional statement as
    // // (ch>='a' && ch<='z')?cout<<"lowercase":cout<<"uppercase"; //below is the alternative
    cout<<((ch>='a' && ch<='z')?"lowerCase":"upperCase");




    return 0;
}
