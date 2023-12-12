function demo()
{
    var re= /^[\d+*\/%-]+$/;
    x = document.getElementById('t1').value;
    x=x.trim();
    if(re.test(x))
    {
        document.getElementById('s1').innerHTML='';
    }
    else if(x.length==0)
    {
        document.getElementById('s1').innerHTML='';
    }
    else 
    {
         document.getElementById('s1').innerHTML='Invalid data';
    }
}

function append(value) 
{
    var t1 = document.getElementById('t1');
    t1.value += value;
}

function clearInput()
{
        var t1 = document.getElementById('t1');
    t1.value='';
}

function total()
{
            var t1 = document.getElementById('t1');
    try
    {
        t1.value=eval(t1.value);
    }
    catch(error)
    {
       t1.value='ERROR'; 
    }
}

function back()
{
                var t1 = document.getElementById('t1');
                t1.value = t1.value.slice(0,-1);
}