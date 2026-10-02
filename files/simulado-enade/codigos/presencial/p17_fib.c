unsigned int fib (unsigned int n)
{
    if (n < 2)
        return 1;
    return fib(n - 2) + fib (n - 1);
}
