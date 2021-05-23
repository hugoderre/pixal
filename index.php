<?php

class A {
    public function foo()
    {
        echo $this->bar;
        $this->bar = 20;
    }
}

class B extends A {

    public function ext()
    {
        $this->bar = 10;
        $this->foo();
        echo $this->bar;
    }
}

class C extends A {

    public function ext()
    {
        $this->bar = 15;
        $this->foo();
    }
}

$b = new B;
$b->ext();

// $c = new C;
// $c->ext();