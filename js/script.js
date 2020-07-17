$(document).ready(function() {
  const testimony = [
    {
      client: "TYRELL",
      img: "img/user3-128x128.jpg",
      star: `<span><i class="fas fa-star"></i></span><span><i class="fas fa-star"></i></span><span><i class="fas fa-star"></i></span><span><i class="fas fa-star-half"></i></span>`,
      text:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    },
    {
      client: "JOHN",
      img: `"src","img/user3-128x128.jpg"`,
      star: `<span><i class="fas fa-star"></i></span><span><i class="fas fa-star"></i></span><span><i class="fas fa-star"></i></span><span><i class="fas fa-star"></i></span>`,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?"
    },
    {
      client: "WANDA",
      img: `"src","img/user3-128x128.jpg"`,
      star: `<span><i class="fas fa-star"></i></span><span><i class="fas fa-star"></i></span><span><i class="fas fa-star-half"><i/></span>`,
      text:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      client: "AMY",
      img: `"src","img/user3-128x128.jpg"`,
      star: `<span><i class="fas fa-star"></i></span><span><i class="fas fa-star"></i></span><span><i class="fas fa-star"></i></span><span><i class="fas fa-star"></i></span><span><i class="fas fa-star-half"></i></span>`,
      text:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
    },
    {
      client: "SANDY",
      img: `"src","img/user3-128x128.jpg"`,
      star: `<span><i class="fas fa-star"></i></span><span><i class="fas fa-star"></i></span><span><i class="fas fa-star"></i></span><span><i class="fas fa-star"></i></span>`,
      text:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
  ];

  let index = 0;
  const button = document.querySelectorAll(".arrow");

  $(".image").attr("src", testimony[0].img);
  $(".card-name").html(testimony[0].client);
  $(".review-star").html(testimony[0].star);
  $(".text-testimony").html(testimony[0].text);

  button.forEach(function(i) {
    i.addEventListener("click", function() {
      if (i.classList.contains("arrow-left")) {
        index--;
        if (index < 0) {
          index = testimony.length - 1;
        }
        console.log(index);
        $(".image").attr("src", testimony[index].img);
        $(".card-name").html(testimony[index].client);
        $(".review-star").html(testimony[index].star);
        $(".text-testimony").html(testimony[index].text);
      } else if (i.classList.contains("arrow-right")) {
        index++;
        if (index > testimony.length - 1) {
          index = 0;
        }
        $(".image").attr("src", testimony[index].img);
        $(".card-name").html(testimony[index].client);
        $(".review-star").html(testimony[index].star);
        $(".text-testimony").html(testimony[index].text);
      }
    });
  });
});
