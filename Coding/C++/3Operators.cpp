#include <iostream>
using namespace std;

int main(){

    //ARITEMATIC OPERATORS
    cout<<"ARITEMATIC OPERATORS"<<endl;
    int a=50, b=11;

    cout<<"sum is: "<<(a+b)<<endl;
    cout<<"difference is: "<<(a-b)<<endl;
    cout<<"product is: "<<(a*b)<<endl;
    
    //we are diving int with int value so we will get int as whole no. not float or double
    cout<<"division is: "<<(a/b)<<endl;  
    //using type casting
    cout<<"division output as double value:"<<(a/double(b))<<endl;  
    
    cout<<"remainder is: "<<(a%b)<<endl;


    //RELATIONAL OPERATOR
    cout<<"RELATIONAL OPERATOR"<<endl;
    cout<<(3<5)<<endl;
    cout<<(3>5)<<endl;
    cout<<(3<=5)<<endl;
    cout<<(3>=5)<<endl;
    cout<<(3!=5)<<endl;
    cout<<(3==5)<<endl;

    //LOGICAL OPERATOR
    cout<<"Logicla operator"<<endl;
    cout<<!(3>5)<<endl;  //NOT logical operator
    
    //if any one of the conditionn true then whole output return true else false
    cout<<((3<1)||(2<5)) << endl ;

    //given all condition is true for true output else false
    cout<<((3<1)&&(2<5)) << endl ;


    //increment and decrement
    int c=12;
    int d=c++;  //post increment operator
    //here first show original value then increment but in ++c it will directly show the final result
    cout<<"c = "<<d<<endl;
    cout<<"new c after increment ="<<c<<endl;

    return 0;
}