function calculate(studentsList, studentsName){
    
        var nameCount = {};
    
       for(var i=0; i < studentsList.length; i++){
            if(nameCount[studentsList[i].name]== null){
                nameCount[studentsList[i].name] = 0;
            }

            nameCount[studentsList[i].name]++;
        }
    
        return nameCount;
    }
    
    
    var students = [
        {
            id: 1,
            name: 'gio'
        },
        {
         id: 2,
         name:'Giorgi'
        },
        {
         id: 3,
         name:'Giorgi'
         },
         {
       
          id: 4,
          name: 'Vaxo'
         }

        
    
        
    ];
    
    
    var names = calculate(students);

    for(name in names){
        alert(name + ": " + names[name]);
    }