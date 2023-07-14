async function setTagAsDone(element, id) {
  event.preventDefault();
  try {
    const headers = new Headers({ "Content-Type": "application/json" }); //Tipo da chamada
    const body = JSON.stringify({ task: { done: element.checked } });
    const task = await fetch(`/tasks/${id}?_method=put`, {
      headers,
      body: body,
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => data.task);

    const parent = element.parentNode;

    if (task.done) {
      element.checked = true;
      parent.classList.add("has-text-success");
      parent.classList.add("is-italic");
    } else {
      element.checked = false;
      parent.classList.remove("has-text-success");
      parent.classList.remove("is-italic");
    }
  } catch (error) {
    console.log(error);
    alert("Erro ao atualizar a tarefa");
  }
}
