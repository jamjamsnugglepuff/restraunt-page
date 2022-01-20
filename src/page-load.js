// import { container } from "webpack";


let home_module = (()=>{

	let create_div = function(){
		let firstContainer = document.createElement('div');
		firstContainer.classList.add('container');
		
		let col = document.createElement('div');
		col.classList.add('col');

		let heading = document.createElement('h2');
		heading.innerText = 'Welcome';

		let paragraph = document.createElement('p');
		paragraph.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ullam nemo tenetur, illum omnis sit in molestiae non ducimus autem fugit debitis reprehenderit commodi nostrum obcaecati repellendus, hic quisquam nobis.';

		col.appendChild(heading);
		col.appendChild(paragraph);
		firstContainer.appendChild(col);


		col = document.createElement('div');
		col.classList.add('col');

		let img = document.createElement('img');
		img.classList.add('placeholder-img');

		col.appendChild(img);
		firstContainer.appendChild(col);

		return firstContainer;
	};

	return {create_div};
})();


let menu_module = (()=>{



	let create_div = function(){
		
		let container = document.createElement('div');
		container.classList.add('container');
		container.classList.add('container--no-flex')

		let heading = document.createElement('h2');
		heading.innerText = 'Menu';
		container.appendChild(heading);

		let list = document.createElement('ul');
		list.classList.add('item-container');
		container.appendChild(list);

		for(let i = 0; i < 10; i ++){
			let li = document.createElement('li');
			li.classList.add('item');
			list.appendChild(li);

			let table = document.createElement('table');
			let tr = document.createElement('tr');
			let th = document.createElement('th');
			let th2 = document.createElement('th');

			th.innerText = 'Name';
			th2.innerText = 'Price';
			table.appendChild(tr);
			tr.appendChild(th);
			tr.appendChild(th2);
			li.appendChild(table);

			let tr2 = document.createElement('tr');
			table.appendChild(tr2);

			let td = document.createElement('td');
			td.innerText = 'Sample Pizza';
			tr2.appendChild(td);

			let td2 = document.createElement('td');
			td2.innerText = '$5.95';
			tr2.appendChild(td2);
		}

		return container;

	};

	return {create_div};
})();

let location_module = (()=>{

	let create_div = function(){

		let container = document.createElement('div');
		container.classList.add('container');

		let col1 = document.createElement('div');
		col1.classList.add('col');
		let heading = document.createElement('h2');
		heading.innerText = 'Location';
		col1.appendChild(heading);
		container.appendChild(col1);

		let col2 = document.createElement('div');
		col2.classList.add('col');
		let img = document.createElement('img');
		img.classList.add('placeholder-img');
		col2.appendChild(img);
		container.appendChild(col2);

		return container;
	};

	return {create_div};
})();

let page_load = (()=>{

    let views = {
       'Home': home_module,

       'Menu': menu_module,

       'Location': location_module
    };

    let content = document.querySelector('#content');

    let initialize = function (){
        // initializes webpage home view and nav menu
        let nav = document.querySelectorAll('.link');

        for(let a of nav){
            a.addEventListener('click', (e)=>{
                // console.log(e.target.innerText);
                let tab = e.target.innerText
                page_load.switchTab(tab);
            });
        }

        page_load.switchTab('Home');
    };

    let switchTab = function(target){
        // switches tab from current view to given key of views dict
        console.log(target);
        content.innerHTML = '';
        let div = views[target].create_div();
		content.appendChild(div);
    }

    return {initialize, switchTab};
})();


export default page_load




/* <div class="container">
				<div class='col'>
					<h2>Heading</h2>
					<p></p>
				</div>
				<div class="col">
					<img class="placeholder-img" src="" alt="">
				</div>
			</div>

			

			<div class="container">
				<form action="#">
					<label for="">First Name</label>
					<input type="text">
					<label for="">Last Name</label>
					<input type="text" name="" id="">
					<label for="">Email</label>
					<input type="text">
					<label for="">Message</label>
					<textarea name="" id="" cols="30" rows="10"></textarea>
					<button>Submit</button>
				</form>

				<div class="placeholder-img">

				</div>
			</div> */