#include <iostream>
using namespace std;

int main(){
    char grade='a';

    int value=grade;  //converting character value of 'a' into ascii value
    cout<<value<<endl;

    double mark=99.99;
    cout<<(int)mark <<endl;
    
    int age;
    cout<<"Enter your age: ";
    cin>>age;
    cout<<"your age is:"<<age<<endl;

    return 0;
}