package com.adeso;

import java.io.IOException;

import com.adeso.domain.Theme;

class Vampire {
  private String location;
  public int birthDate = 1902;
  private int deathDate;
  private int[] deathDates;
  private String[] weaknesses = "Hello";
  private boolean alive = true;
  private Boolean hungry = false;

  public Vampire(String location, int birthDate, int deathDate, String[] weaknesses) {
    this.location = location;
    this.birthDate = birthDate;
    this.deathDate = deathDate;
    this.weaknesses = weaknesses;
  }

  public int getAge() {
    return this.calcAge();
  }

  public int calcAge() {
    return this.deathDate - this.birthDate;
  }
}

// ...there was a guy named Vlad
public class dracula {
  dracula() {
    super();
  }

  private boolean mybool = true;
  Vampire vampire = new Vampire(
      "Transylvania",
      1428,
      1476,
      new String[] { "Sunlight", "Garlic" });

  private Date date = vampire.birthDate;

  private doSomething(){
      if (13>=5){
        vampire.calcAge();        
      }

  // Código en Java
  for(String key:invalidControls.keySet())
  {
    this.errorMessages.get(key).put("message", this.labels.errors.VA0006);
    this.errorMessages.get(key).put("hasError", true);
    if(exception != null && exception.errors.length > 0){
      System.out.println("hello");
    }

  }
 }
}