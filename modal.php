<?php
    $modal_id = $_GET['modal_id'];

    switch($modal_id)
    {
        case "nova_vijest":
            echo 
            '
            <form id="form" action="" method="post">
            <div class="modal-body" id="myModal" style="padding:0">
                <div class="modal-header" style="margin-bottom:25px;">
                    <button style="color:white" type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" style="color:black">New employee</h4>
                </div>
                <form class="form-horizontal">
                <div class="form-group">
                    <label class="col-md-3 control-label">Naziv</label>
                    <div class="col-md-8">
                        <input type="text" class="form-control" placeholder="Unesi naziv" id="post_naziv" name="post_naziv"/>
                    </div>
                    <label class="col-md-3 control-label">Tekst</label>
                    <div class="col-md-8">
                        <input type="text" class="form-control" placeholder="Unesi tekst" id="post_tekst" name="post_tekst"/>
                    </div>
                </form>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success btn-s" onclick="Dodaj()">Spremi</button>
                    <button type="button" id="btnClose" class="btn btn-success btn-s" datadismiss="modal" onclick="CloseModal()">Zatvori</button>
                </div>
           </div>
           </form>
            ';
            break;

            default:
            echo "Nešto nije u redu";
            break;
    }

?>