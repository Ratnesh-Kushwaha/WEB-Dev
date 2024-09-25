#include <iostream>
using namespace std;

int main(){
    int n=5;


    //NESTED loop

    //SQUARE PATTERN
    for(int i=1; i<=n; i++){   //loop for each line
        for(int j=1; j<=n; j++){        //loop for looping inside each line
            cout<<j<<" ";
        }
        cout<<endl;
    }

    //increasing numbers every time as we are looping
    cout<<"series of number increment by 1: "<<endl;
    int num=1;
    for(int i=0 ; i<n; i++){
        for(int j=0 ; j<n; j++){
            cout<<num<<" ";
            num++;
        }
        cout<<endl;
    }
    cout<<"last number after whole loop will be: "<<num<<endl;

    //char pattern
    char ch='A';            //ASCII value of 'A' is 65
    for(int i=0; i<n;i++){
        for(int j=0;j<n;j++){
            cout<<ch<<" ";
            ch++;           //since character value save in form of ASCII value so we add +1 to each ascii value
        }
        cout<<endl;
    }



    //TRIANGLE PATTERN
    //star and number patter incrementing in each line
    for(int i=0; i<n;i++){
        
        for(int j=0;j<i;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
   
    //Good pattern to obeserve were in each line inner loop's cout in dependent of outer's loop 'i'
    for(int i=0; i<n;i++){
        for(int j=0;j<i;j++){
            cout<<i<<" ";
        }
        cout<<endl;
    }

    //similar to above loop with bit of twist where inner loop's cout is dependent on itself
    for(int i=0; i<n;i++){
        for(int j=1;j<=i;j++){
            cout<<j<<" ";
        }
        cout<<endl;
    }   

    //REVERSE TRIANGLE PATTERN  backward loop
    cout<<endl;
    for(int i=n; i>0;i--){
        for(int j=i;j>0;j--){
            cout<<j<<" ";
        }
        cout<<endl;
    }                              

    //Floyd's Triangle pattern
    int num1_=1;
    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            cout<<num1_<<" ";
            num1_++;
        }
        cout<<endl;
    }

    char chh='A';
    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            cout<<chh<<" ";
            chh++;
        }
        cout<<endl;
    }

    //bawal type pattern printing
    char cha='@';
    for(int i=0;i<n;i++){
        cha+=i;
        for(int j=0;j<i;j++){
            cout<<cha<<" ";
            cha--;
        }
        cout<<endl;
    }
    cout<<endl;

    //INVERTED TRIANGLE PATTERN
    // int num2_=1;
    for(int i=0;i<n;i++){
        //spaces
        for(int j=0; j<i;j++){
            cout<<" ";
        }
        //numbers
        for(int j=0; j<n-i;j++){
            cout<<(i+1);
        }

        cout<<endl;
    }

    //PYRAMID PATTERN
    for(int i=0;i<n;i++){
        //spaces
        for(int j=0; j<n-i-1;j++){
            cout<<" ";
        }
        //numbers1
        for(int j=1; j<=i+1;j++){
            cout<< j;
        }
        //number2
         for(int j=i; j>0;j--){
            cout<<j;
        }
        cout<<endl;
    }

    //DIAMOND PATTERN
    //top half
    for (int i = 0; i < n; i++){
        //spaces
        for (int j = 0; j < n-i; j++){
            cout<<" ";
        }

        cout<<"*";

        if(i!=0){
            //spaces
             for (int j = 0; j < 2*i-1; j++){
            cout<<" ";
        }

            cout<<"*";
        }
        cout<<endl;
    }
    //bottom half
    for(int i=0; i<n-1;i++){
        //spaces
        for (int j = -1; j <i+1; j++){
            cout<<" ";
        }
        cout<<"*";

        if(i!=n-2){
            //spaces
            for (int j = 0; j <2*(n-2-i)-1; j++){
                cout<<" ";
        }
        cout<<"*";
        }
        cout<<endl;
    }


    //BUTTERFLY PATTERN
    int m=4;
    //upper half
    for(int i=1; i<=m; i++){
        //first half
        for(int j=0; j<i; j++ ){
            cout<<"*";
        }
        //spaces
        for(int j=1; j<=2*(m-i); j++){
            cout<<" ";
        }

        //print second half
        for(int j=0; j<i; j++){
            cout<<"*";
        }
        cout<<endl;
    }

    //lower half
    for(int i=m; i>=1; i--){
        //first lower half
        for(int j=1; j<=i; j++){
            cout<<"*";
        }

        //space in between lower halves
        for(int j=1;j<=2*(m-i); j++){
            cout<<" ";
        }

        //second lower half
        for(int j=1; j<=i; j++){
            cout<<"*";
        }
        cout<<endl;
    }


    return 0;
}