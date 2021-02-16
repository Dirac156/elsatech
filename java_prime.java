public class java_prime {
    public static void main(String[] args){
        
        printOut(7);

        printOut(10);

        printOut(101);

        printOut(-5);

        printOut(9);
    }

    public static boolean isPrime(int number){
        if (number == 0 || number == 1 || number < 0){
            System.out.println(">>> Not a valid number");
            return false;
        }
        for (int i = 2; i < number / 2; i++){
            if (number % i == 0){
                return false;
            }
        }
        return true;
    }

    public static void printOut(int numb){
        boolean result = isPrime(numb);
        if (result){
            System.out.println(numb + " is a prime number");
        } else {
            System.out.println(numb + " is not a prime number");
        }
    }
}